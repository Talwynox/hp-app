package leakvid.hpcore.domain.basetype

import leakvid.hpcore.domain.enumtypes.ResourceType

data class Resource(
        var name: ResourceType,
        var maxValue: Int,
        var baseValue: Int,
        var modifiers: List<ValueModifier>)