


export const fetchAllCategories = async () => {
  try {
    const response = await fetch("/api/post/categories",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const data = await response.json();
    console.log(data);
    
    return data;
    
  } catch (error) {
    console.error('Erreur lors du chargement des catégories:', error);
    throw error;
  }
};
