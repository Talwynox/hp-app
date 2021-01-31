package leakvid.hpcore

import com.mongodb.client.MongoClient
import com.mongodb.client.MongoClients
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration
import org.springframework.data.mongodb.core.MongoTemplate


@Configuration
class AppConfig : AbstractMongoClientConfiguration() {

    @Bean
    override fun getDatabaseName(): String {
        return "Homebrew"
    }

    @Bean
    override fun mongoClient(): MongoClient {
        return MongoClients.create("mongodb://localhost:27017")
    }

    @Bean
    fun mongoTemplate(): MongoTemplate? {
        return MongoTemplate(mongoClient(), databaseName)
    }
}