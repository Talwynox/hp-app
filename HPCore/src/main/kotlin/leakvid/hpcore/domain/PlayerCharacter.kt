package leakvid.hpcore.domain

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
class PlayerCharacter(
        @Id val name: String,
        val stats: StatBlock){
}