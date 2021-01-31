package leakvid.hpcore.domain.basetype

data class Stat(
        var name: String,
        var baseValue: Int,
        var modifiers: List<ValueModifier>)