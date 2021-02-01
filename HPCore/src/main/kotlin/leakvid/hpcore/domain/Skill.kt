package leakvid.hpcore.domain

import leakvid.hpcore.domain.basetype.Stat

data class Skill(
        val name: String,
        val description: String,
        val bonus: Stat)