package leakvid.hpcore.domain.basetype

data class Resource(
    var name: String,
    var maxValue: Int,
    var currentValue: Int,
    var baseValue: Int,
    var modifiers: List<ValueModifier>)