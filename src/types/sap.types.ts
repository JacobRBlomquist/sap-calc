

interface Oil {
    name: string,
    NaOHSap: number,
    id: number,
    lauric: number,
    linoleic: number,
    linolenic: number,
    myristic: number,
    oleic: number,
    palmitic: number,
    ricinoleic: number,
    stearic: number
    grams: number
}


interface InputRecipe {
    oils: Array<Oil>,
    lyeConcentrationPercentage: number,
    superfatPercentage: number,
    fragranceGrams: number
}

interface Property {
    value: number,
    suggestedMin: number,
    suggestedMax: number
}

interface CalculatedRecipe {
    oils: Array<Oil>,
    lyeGrams: number,
    waterGrams: number,
    fragranceOilGrams: number,
    properties: {
        bubbly: Property,
        cleansing: Property,
        condition: Property,
        hardness: Property,
        longevity: Property,
        stable: Property,
        iodine: Property,
        ins: Property
    },
    fattyAcids: {
        lauric: number,
        linoleic: number,
        myristic: number,
        oleic: number,
        palmitic: number,
        stearic: number
    }
}

export { type Oil, type InputRecipe, type Property, type CalculatedRecipe }