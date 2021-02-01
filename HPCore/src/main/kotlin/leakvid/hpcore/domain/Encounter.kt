package leakvid.hpcore.domain

import leakvid.hpcore.domain.basetype.Resource
import leakvid.hpcore.domain.basetype.Stat
import leakvid.hpcore.domain.enumtypes.DamageType
import leakvid.hpcore.domain.enumtypes.ResistanceType
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class Encounter(
        @Id val name: String,
        val stats: List<Stat>,
        val resource: List<Resource>,
        val resistances: Map<DamageType, ResistanceType>,
        val skills: List<Skill>,
        val features: List<Feature>,
        val actions: List<Action>)