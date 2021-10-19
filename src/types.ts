export type Product = { 
    category: Category;
    description: string;
    gallery: string[];
    prices: Price[];
    attributes: AttributeSet[];
    inStock: boolean;
    brand: string;
    id: string;
};

export type CategoryShape = {
    name: Category;
    products: Product[];
};

export enum Category {
    clothes = 'clothes',
    tech = 'tech',
};

export type Price = {
    currency: string;
    amount: number;
};

export type AttributeSet = {
    id: string;
    items: Attribute[];
    type: AttributeType;
    name: string;
};

export type Attribute = {
    displayValue: string,
    value?: string,
    id?: string
};

export enum AttributeType {
    text = 'text',
    swatch = 'swatch'
};

export type CategoryMap = Record<Category, CategoryShape>;