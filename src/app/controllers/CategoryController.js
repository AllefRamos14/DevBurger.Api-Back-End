import * as Yup from 'yup';
import Category from '../models/Category';
import User from '../models/User';

class CategoryController {
  async store(request, response) {
    console.log('Usuário autenticado:', request.userId); // Adicione isso no início de cada método
 

    const schema = Yup.object({
      name: Yup.string().required(),
    });

    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const user = await User.findByPk(request.userId);
    if (!user || !user.admin) {
      return response.status(401).json({ error: 'Unauthorized' });
    }

    const { name } = request.body;

    const categoryExists = await Category.findOne({ where: { name } });

    if (categoryExists) {
      return response.status(400).json({ error: 'Category already exists' });
    }

    const path = request.file ? request.file.filename : null;

    const category = await Category.create({
      name,
      path,
    });

    return response.status(201).json(category);
  }



  async update(request, response) {
    const { id } = request.params;

    const user = await User.findByPk(request.userId);
    if (!user || !user.admin) {
      return response.status(401).json({ error: 'Unauthorized' });
    }

    const category = await Category.findByPk(id);
    if (!category) {
      return response.status(400).json({ error: 'Category not found' });
    }

    const { name } = request.body;
    const path = request.file ? request.file.filename : category.path;

    if (name) {
      const categoryNameExists = await Category.findOne({
        where: { name },
      });

      if (categoryNameExists && categoryNameExists.id !== Number(id)) {
        return response.status(400).json({ error: 'Category name already in use' });
      }
    }

    await category.update({ name, path });

    return response.status(200).json(category);
  }

  async index(request, response) {
    const categories = await Category.findAll();
    return response.json(categories);
  }
}

export default new CategoryController();

