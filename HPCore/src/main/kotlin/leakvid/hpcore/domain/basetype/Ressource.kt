package leakvid.hpcore.domain.basetype

data class Ressource(
    var name: String,
    var baseValue: Int,
    var currentValue: Int,
    var modifiers: List<ValueModifier>)