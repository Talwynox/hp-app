package leakvid.hpcore.repositories

import leakvid.hpcore.domain.PlayerCharacter
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface PlayerCharacterRepository : MongoRepository<PlayerCharacter, Long> {
    fun findByName(name : String) : PlayerCharacter
}