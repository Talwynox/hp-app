package leakvid.hpcore.domain.basetype

data class ValueModifier(
        val modifier: Int,
        val roll: Roll,
        val statReference: String,
        val statReferenceMultiplier: Int,
        val source: String,
        val log: String)
