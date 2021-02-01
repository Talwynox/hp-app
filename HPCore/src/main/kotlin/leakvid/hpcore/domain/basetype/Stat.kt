package leakvid.hpcore.domain.basetype

import leakvid.hpcore.domain.enumtypes.StatType

data class Stat(
        val name: StatType,
        val value: Int,
        val baseValue: Int,
        val modifiers: List<ValueModifier>)