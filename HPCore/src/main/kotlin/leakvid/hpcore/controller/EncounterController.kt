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
import leakvid.hpcore.domain.enumtypes.ResourceType
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
        service.merge(createEncounter(
                "Dire Wolf",
                1,
                14,
                37,
                17,
                15,
                15,
                3,
                12,
                7,
                50
        ))

        service.merge(createEncounter(
                "Owlbear",
                3,
                13,
                59,
                20,
                12,
                17,
                3,
                12,
                7,
                40
        ))

        service.merge(createEncounter(
                "Gelatinous Cube",
                5,
                6,
                210,
                14,
                3,
                20,
                1,
                6,
                1,
                15
        ))
    }


    private fun createEncounter(
        name: String,
        cr: Int,
        ac: Int,
        hp: Int,
        str: Int,
        dex: Int,
        con: Int,
        int: Int,
        wis: Int,
        cha: Int,
        ms: Int
    ) : Encounter{
        val stats = listOf<Stat>(
                Stat(StatType.ChallengeRating, cr, cr, listOf<ValueModifier>()),
                Stat(StatType.ArmorClass, ac, ac, listOf<ValueModifier>()),
                Stat(StatType.Strength, str, str, listOf<ValueModifier>()),
                Stat(StatType.Dexterity, dex, dex, listOf<ValueModifier>()),
                Stat(StatType.Constitution, con, con, listOf<ValueModifier>()),
                Stat(StatType.Intelligence, int, int, listOf<ValueModifier>()),
                Stat(StatType.Wisdom, wis, wis, listOf<ValueModifier>()),
                Stat(StatType.Charisma, cha, cha, listOf<ValueModifier>()))
                Stat(StatType.MoveSpeed, ms, ms, listOf<ValueModifier>())

        val resources = listOf<Resource>(
                Resource(ResourceType.HitPoints, hp, hp, listOf<ValueModifier>())
        )

        return Encounter(
                name,
                stats,
                resources,
                mapOf<DamageType, ResistanceType>(),
                listOf<Skill>(),
                listOf<Feature>(),
                listOf<Action>())
    }
}