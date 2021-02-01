package leakvid.hpcore

import com.mongodb.client.MongoClient
import com.mongodb.client.MongoClients
import io.swagger.v3.oas.models.Components
import io.swagger.v3.oas.models.OpenAPI
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration
import org.springframework.data.mongodb.core.MongoTemplate
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;

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

    @Bean
    fun customOpenAPI(@Value("\${springdoc.version}") appVersion: String?): OpenAPI? {
        return OpenAPI()
                .components(Components())
                .info(Info().title("Books API").version(appVersion)
                        .license(License().name("Apache 2.0").url("http://springdoc.org")))
    }
}