import React from 'react';
import { CategoryData } from 'types/folderDataType';

const CategoryContext = React.createContext<CategoryData>(undefined);

export default CategoryContext;
