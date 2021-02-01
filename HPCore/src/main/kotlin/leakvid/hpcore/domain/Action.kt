package leakvid.hpcore.domain

import leakvid.hpcore.domain.basetype.Stat

data class Action(
        val name: String,
        val description: String,
        val attack: Stat) // TODO
