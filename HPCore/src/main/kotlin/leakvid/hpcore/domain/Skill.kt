package leakvid.hpcore.domain

import leakvid.hpcore.domain.enumtypes.StatType

data class Skill(
        val name: String,
        val description: String,
        val stat: StatType)