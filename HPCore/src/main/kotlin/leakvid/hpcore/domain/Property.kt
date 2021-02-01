package leakvid.hpcore.domain

import leakvid.hpcore.domain.basetype.StatCondition

data class Property(
        val name: String,
        val restriction: StatCondition,
        val feature: Feature
)