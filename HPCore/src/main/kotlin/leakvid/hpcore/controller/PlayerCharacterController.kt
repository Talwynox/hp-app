package leakvid.hpcore.controller

import leakvid.hpcore.domain.PlayerCharacter
import leakvid.hpcore.repositories.PlayerCharacterRepository
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController


@RestController
class PlayerCharacterController(val repository: PlayerCharacterRepository) {

    @GetMapping("/characters")
    fun all(): List<PlayerCharacter?>? {
        return repository.findAll()
    }

    @GetMapping("/test")
    fun test(): String {
        return "test"
    }
}