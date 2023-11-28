import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Barang = db.define('barangs',{
    KodeBarang: {
        type: DataTypes.STRING, // Assuming KodeBarang is a string, you can adjust the type accordingly
        primaryKey: true,
        allowNull: false,
      },
      NamaBarang: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Satuan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      HargaSatuan: {
        type: DataTypes.FLOAT, // Assuming HargaSatuan is a floating-point number, adjust the type accordingly
        allowNull: false,
      },
      Stok: {
        type: DataTypes.INTEGER, // Assuming Stok is an integer, adjust the type accordingly
        allowNull: false,
      },
    }, {
      timestamps: false, // Disable timestamps (createdAt and updatedAt)
});

export default Barang;

(async()=>{
    await db.sync();
})();