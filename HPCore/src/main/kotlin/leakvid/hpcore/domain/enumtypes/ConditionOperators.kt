package leakvid.hpcore.domain.enumtypes

enum class ConditionOperators {
    LessThen {
        fun apply(left: Int, right: Int): Boolean = left < right
    },
    GreaterThen {
        fun apply(left: Int, right: Int): Boolean = left > right
    },
    Equals {
        fun apply(left: Int, right: Int): Boolean = left == right
    }
}