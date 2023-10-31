import { useAnnouncement } from "@/contexts/announcementContext";
import { AnnouncementEdite, AnnouncementEditeData } from "@/schemas/announcement.schamas";
import api from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

const FormEditeAnnouncement = () => {

  //readAnnouncemntForId, setReadAnnouncemntForId
  const {announcementId, editeAnnouncements, readAnnouncemntForId, setIsOpenModalDeleteAnnouncement, setIsOpenModalEditeAnnouncement, setReadAnnouncemntForId} = useAnnouncement()

  //const [readAnnouncemntForId, setReadAnnouncemntForId] = useState(null)



//console.log("o carro ta aqui", readAnnouncemntForId)
  const {register, handleSubmit, control, formState: { errors }} = useForm<AnnouncementEditeData>({

    resolver: zodResolver(AnnouncementEdite)
   
  })

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "image", // unique name for your Field Array
  });

  
  const onFormSubmit = (formData: AnnouncementEditeData) => {

    const {url_img1, url_img2, image ,...rest} = formData

    let initialArrayImgData = [url_img1, url_img2]

    const strImageArray: string[] = image.map((img) => img.url_img!) || null

    if (strImageArray){
      initialArrayImgData = [...initialArrayImgData, ...strImageArray]
    }

    const imgArray = initialArrayImgData.map((img) => {
      return {
        url_img: img
      }
    })

    let adObj = {
      brand: rest.brand,
      model: rest.model,
      year: rest.year,
      fuel: rest.fuel,
      km: rest.km,
      color: rest.color,
      priceTableFipe: rest.priceTableFipe,
      price: rest.price,
      coverImage: rest.coverImage,
      description: rest.description,
      image: imgArray
    }

    

    editeAnnouncements(adObj, announcementId)

    //toggleModal(false)
    //setIsOpenModal(false)

  }

  

  //console.log("carreguei", readAnnouncemntForId)

  //defaultValue={userData.email}

  const handleDeleteModal = () => {

    setIsOpenModalDeleteAnnouncement(true)
    setIsOpenModalEditeAnnouncement(false)


  }

  /*
  useEffect(() => {

    async function loadAnnouncement(){
      try {
        const {data} = await api.get(`/anouncements/${announcementId}`)

        setReadAnnouncemntForId(data)
      } catch (error) {
        console.log("deu erro ao carregar o anuncio por id no form edite")
        
      }

    }
    loadAnnouncement()

  },[announcementId])
*/

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      
      <div>
        <label htmlFor="brand">
          Marca
        </label>
        <input 
        defaultValue={readAnnouncemntForId.brand}
        type="text" 
        placeholder="Ex: Chevrolet"
        {...register("brand")}
        />
        {errors.brand && <span>{errors.brand.message}</span>}
      </div>

      <div>
        <label htmlFor="model">
        Modelo
        </label>
        <input 
        defaultValue={readAnnouncemntForId.model}
        type="text" 
        placeholder="Ex: Caramo SS 6.2 v8"
        {...register("model")}
        />
        {errors.model && <span>{errors.model.message}</span>}
      </div>

      <div>
        <label htmlFor="year">
          Ano
        </label>
        <input 
        defaultValue={readAnnouncemntForId.year}
        type="number" 
        placeholder="Ex: 2018"
        {...register("year")}
        />
        {errors.year && <span>{errors.year.message}</span>}
      </div>

      <div>
        <label htmlFor="fuel">
          Combustível
        </label>
        <input 
        defaultValue={readAnnouncemntForId.fuel}
        type="text" 
        placeholder="Ex: Gasolina/Etanol"
        {...register("fuel")}
        />
        {errors.fuel && <span>{errors.fuel.message}</span>}
      </div>

      <div>
        <label htmlFor="km">
        Quilometragem
        </label>
        <input 
        defaultValue={readAnnouncemntForId.km}
        placeholder="Ex: 3000"
        type="number"
        {...register("km")}
       />
        {errors.km && <span>{errors.km.message}</span>}
      </div>

      <div>
        <label htmlFor="color">
        Cor
        </label>
        <input 
        defaultValue={readAnnouncemntForId.color}
        placeholder="Ex: Branco"
        type="text"
        {...register("color")}
       />
        {errors.color && <span>{errors.color.message}</span>}
      </div>

      <div>
        <label htmlFor="priceTableFipe">
        Preço tabela FIPE
        </label>
        <input
        defaultValue={readAnnouncemntForId.priceTableFipe}
        placeholder="Ex: 48000"
        type="number"
        {...register("priceTableFipe")}
       />
        {errors.priceTableFipe && <span>{errors.priceTableFipe.message}</span>}
      </div>

      <div>
        <label htmlFor="price">
        Preço
        </label>
        <input 
        defaultValue={readAnnouncemntForId.price}
        placeholder="Ex: 500000"
        type="number"
        {...register("price")}
       />
        {errors.price && <span>{errors.price.message}</span>}
      </div>

      <div>
        <label htmlFor="description">
        Descrição
        </label>
        <textarea id="description" placeholder="Digite uma descrição"
        {...register("description")} defaultValue={readAnnouncemntForId.description}></textarea>
        {errors.description && <span>{errors.description.message}</span>}
      </div>

      <div>
        <label htmlFor="coverImage">
        coverImage
        </label>
        <input 
        defaultValue={readAnnouncemntForId.coverImage}
        type="text"
        {...register("coverImage")}
       />
        {errors.coverImage && <span>{errors.coverImage.message}</span>}
      </div>


      <div>
        <label htmlFor="image">
        1° Imagem da galeria
        </label>
        <input 
        
        type="text"
        {...register("url_img1")}
       />

      </div>

      <div>
        <label htmlFor="image">
        2° Imagem da galeria
        </label>
        <input 
        
        type="text"
        {...register("url_img2")}
       />
      </div>

     
    <> 
      {fields && fields.map((field, index) => {

        return (
          <div key={field.id}>
                <label htmlFor="image">
                Extra Imagem da galeria
                </label>
                <input 
                type="text"
                defaultValue={`${readAnnouncemntForId}.image.${index}.url_img`}
                {...register(`image.${index}.url_img`)}
                />
          </div>

        )
            
      })}
    
    </>
            
        
       
      

      <button type="button" onClick={() =>   
      append({url_img: ""}) }>
        criei o campo novo
      </button>

      <div>
        <button type="button" onClick={handleDeleteModal}>
          Excluir anúncio
        </button>
        <button>
          Salvar alterações
        </button>
      </div>
    </form>
  )
}

export default FormEditeAnnouncement