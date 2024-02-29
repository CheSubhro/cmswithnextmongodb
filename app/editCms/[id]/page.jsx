import EditCmsFrom from "../../../components/EditCmsFrom";


const getCmsById = async (id) => {

    const apiUrl= process.env.API_URL;
    try {
      const res = await fetch(`${apiUrl}/api/cms/${id}`, {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch topic");
      }
  
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

export default async function editCms({params}){
    const {id} =params;
    const { cms } = await getCmsById(id);
    const { title,content,author,category,pub_date,mod_date,status,action } = cms;
    return(
        <>
            <EditCmsFrom id={id} title={title} content={content} 
            author={author} category={category} pub_date={pub_date}
            mod_date={mod_date} status={status} action={action}/>
        </>
    )
}