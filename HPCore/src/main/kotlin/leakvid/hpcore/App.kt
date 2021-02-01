package leakvid.hpcore

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.ComponentScan
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories

@SpringBootApplication
@ComponentScan(basePackages = ["leakvid.hpcore.controller", "leakvid.hpcore.services"])
@EnableMongoRepositories
class App

fun main(args: Array<String>) {
	runApplication<App>(*args)
}
