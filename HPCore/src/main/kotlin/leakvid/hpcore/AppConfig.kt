package leakvid.hpcore

import com.mongodb.client.MongoClient
import com.mongodb.client.MongoClients
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.data.mongodb.core.MongoTemplate
import springfox.documentation.builders.RequestHandlerSelectors

import springfox.documentation.spi.DocumentationType

import springfox.documentation.spring.web.plugins.Docket





@Configuration
class AppConfig {
    @Bean
    fun mongoClient(@Value("\${spring.data.mongodb.host}") host: String,
                    @Value("\${spring.data.mongodb.port}") port: String): MongoClient {
        return MongoClients.create("mongodb://${host}:${port}")
    }

    @Bean
    fun mongoTemplate(@Value("\${spring.data.mongodb.database}") databaseName: String,
                      @Autowired mongoClient: MongoClient): MongoTemplate {
        return MongoTemplate(mongoClient, databaseName)
    }

    @Bean
    fun openApi(): Docket? {
        return Docket(DocumentationType.SWAGGER_2).select()
                .apis(RequestHandlerSelectors.basePackage("leakvid.hpcore.controller")).build()
    }
}