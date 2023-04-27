import { ICategory } from "../core/interfaces/category.model";

interface IExtendCategory extends ICategory {
  subCategories?: IExtendCategory[]
}

function computeSubCategories(currentCategories: IExtendCategory[], rootCategories: IExtendCategory[]) {
  return currentCategories.reduce((acc: IExtendCategory[], current) => {
    const subCategories = rootCategories.filter(category => current.id === category.parentId)
    const newCategory = {
      ...current,
    }
    if (subCategories.length) {
      newCategory.subCategories = computeSubCategories(subCategories, rootCategories)
    }
    acc.push(newCategory)
    return [...acc]
  }, [])
}
export function formatCategories(categories: ICategory[]) {
  const rootCategories = categories.filter((item) => !item.parentId)
  return computeSubCategories(rootCategories, categories)
}
