const Id= async({params,searchParams}:any) =>{
    console.log(params)
    const {id}=await params;
    const {name,age,edu}=await searchParams;
    console.log(name,age,edu);
    return(
      <div>
       <h1>
       page
       </h1>
       <h1>
        id
        {id}
        </h1>
       <h1>
       name
        {name}
       </h1>
       <h1>
       age
        {age}
       </h1>
       <h1>
        all
       {id} {name}{age}{edu}
       </h1>
          </div>
        
    );
  };
  export default Id;
  