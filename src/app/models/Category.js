import Sequelize, { Model } from 'sequelize';

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3002/category-file/${this.path}`;
          },
        },
      },
      {
        sequelize,
        modelName: 'Category',
        tableName: 'categories',
        underscored: true,
      },
    );
    return this;
  }
}
export default Category;
