module.exports = (sequelize, dataTypes) => {
    let alias = "Nota";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: dataTypes.STRING(500),
            notNull: true

        },
        texto: {
           type: dataTypes.TEXT
        },

    };
    let config = {
        tableName: "notas",
        timestamps: true,
        underscored: true,
        paranoid: true,
    }

    const Nota = sequelize.define(alias, cols, config);

return Nota
}

