package leakvid.hpcore.domain

data class Spell(
        val name: String,
        val description: String,
        val isVerbal: Boolean,
        val isSomatic: Boolean,
        val needsMaterials: Boolean) // TODO how to include dmg, area, save