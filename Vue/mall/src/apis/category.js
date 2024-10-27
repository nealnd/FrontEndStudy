import httpInstance from "@/utils/http";

export function getCategoryAPI(id) {
  return httpInstance({
    url: "/category",
    params: {
      id,
    },
  });
}

export const getCategoryFilterAPI = (id) => {
  return httpInstance({
    url: "category/sub/filter",
    params: {
      id,
    },
  });
};

/**
 * @description:get the navigation data
 * @data {
 *  categoryID:1005000,
 * page:1,
 * pageSize:20,
 * sortField:'publishTime'|'orderNum'|'evaluateNum'
 *
 * }
 * @returns
 */
export const getSubCategoryAPI = (data) => {
  return httpInstance({
    url: "/category/goods/temporary",
    method: "POST",
 
        data,

  });
};
