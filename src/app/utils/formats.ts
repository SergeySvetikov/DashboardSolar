import { ICategory } from '../core/interfaces/category.model';
import { IBreadCrumbs } from "../core/interfaces/breadCrumbs.model";

interface IExtendCategory extends ICategory {
  subCategories?: IExtendCategory[];
}

function computeSubCategories(
  currentCategories: IExtendCategory[],
  rootCategories: IExtendCategory[]
) {
  return currentCategories.reduce((acc: IExtendCategory[], current) => {
    const subCategories = rootCategories.filter(
      (category) => current.id === category.parentId
    );
    const newCategory = {
      ...current,
    };
    if (subCategories.length) {
      newCategory.subCategories = computeSubCategories(
        subCategories,
        rootCategories
      );
    }
    acc.push(newCategory);
    return [...acc];
  }, []);
}

export function formatCategories(categories: ICategory[]) {
  const rootCategories = categories.filter((item) => !item.parentId);
  return computeSubCategories(rootCategories, categories);
}

export function getCategoriesTree(categories: ICategory[], categoryId: string) {
  const tree: IBreadCrumbs[] = [];
  computeParentsTree(categories, categoryId, tree);
  return tree;
}
function computeParentsTree(
  categories: ICategory[],
  categoryId: string,
  result: IBreadCrumbs[]
) {
  const productCategory = categories.find((item) => {
    return item.id === categoryId;
  });
  if (productCategory) {
    result.unshift({
      id: productCategory.id,
      name: productCategory.name
    });
    if (productCategory?.parentId) {
      computeParentsTree(categories, productCategory.parentId, result);
    }
  }
}
