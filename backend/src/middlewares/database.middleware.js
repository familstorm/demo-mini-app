import UserEntity from '../modules/user/entities/user.entity.js';
import PriceListEntity from '../modules/pricelist/entities/pricelist.entity.js';
import UnitEntity from '../modules/unit/entities/unit.entity.js';
import LanguageEntity from '../modules/translation/entities/language.entity.js';
import LocalizationEntity from '../modules/translation/entities/localization.entity.js';

const initializationDatabase = (database) => {
  UserEntity.initModel(database)
  UnitEntity.initModel(database)


  // Relationship for translation
  LanguageEntity.Localization = LanguageEntity.hasMany(LocalizationEntity)
  LocalizationEntity.Language = LocalizationEntity.belongsTo(LanguageEntity)

  // Relationship for pricelist
  PriceListEntity.Unit = PriceListEntity.belongsTo(UnitEntity, {
    foreignKey: 'unitId',
    as: 'unit'
  })
  UnitEntity.Pricelist = UnitEntity.hasMany(PriceListEntity)

}

export default initializationDatabase
