package leakvid.hpcore.controller

import leakvid.hpcore.domain.Action
import leakvid.hpcore.domain.Encounter
import leakvid.hpcore.domain.Feature
import leakvid.hpcore.domain.Skill
import leakvid.hpcore.domain.basetype.Resource
import leakvid.hpcore.domain.basetype.Stat
import leakvid.hpcore.domain.basetype.ValueModifier
import leakvid.hpcore.domain.enumtypes.DamageType
import leakvid.hpcore.domain.enumtypes.ResistanceType
import leakvid.hpcore.domain.enumtypes.StatType
import leakvid.hpcore.services.IEncounterService
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin //TODO fix security issues
@RequestMapping("/encounter")
class EncounterController(val service: IEncounterService) {
    @GetMapping
    fun getAll(): List<Encounter?>? {
        return service.getAll()
    }

    @GetMapping("/name")
    fun get(name: String): Encounter? {
        return service.get(name)
    }

    @PostMapping
    fun insert(@RequestBody encounter: Encounter){
        service.merge(encounter)
    }

    @GetMapping("/test")
    fun get() {
        val stats = listOf<Stat>(Stat(StatType.ArmorClass, 10, 10, listOf<ValueModifier>()))
        val resources = listOf<Resource>()
        val resistances = mapOf<DamageType, ResistanceType>()
        val skills = listOf<Skill>()
        val features = listOf<Feature>()
        val actions = listOf<Action>()

        val encounter = Encounter(
                "Dire Wolf",
                stats,
                resources,
                resistances,
                skills,
                features,
                actions)

        service.merge(encounter)
    }
}