import UserEntity from '../modules/user/entities/user.entity.js';
import PriceListEntity from '../modules/pricelist/entities/pricelist.entity.js';
import UnitEntity from '../modules/unit/entities/unit.entity.js';
import LanguageEntity from '../modules/translation/entities/language.entity.js';
import LocalizationEntity from '../modules/translation/entities/localization.entity.js';

const initializationDatabase = (database) => {
  UserEntity.initModel(database)

  UnitEntity.initModel(database)
  PriceListEntity.initModel(database)

  LanguageEntity.initModel(database)
  LocalizationEntity.initModel(database)

  // Relationship for translation
  LanguageEntity.hasMany(LocalizationEntity, {
    foreignKey: 'languageId',
    as: 'localizations'
  })
  LocalizationEntity.belongsTo(LanguageEntity, {
    foreignKey: 'languageId',
    as: 'language'
  })


  // Relationship for pricelist
  PriceListEntity.belongsTo(UnitEntity, {
    foreignKey: 'unitId',
    as: 'unit'
  })
  UnitEntity.hasMany(PriceListEntity, {
    foreignKey: 'unitId',
    as: 'priceLists',
  })

}

export default initializationDatabase
