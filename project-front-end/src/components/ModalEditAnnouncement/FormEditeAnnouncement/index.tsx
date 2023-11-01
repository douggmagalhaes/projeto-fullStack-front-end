import { useAnnouncement } from "@/contexts/announcementContext";
import { AnnouncementEdite, AnnouncementEditeData } from "@/schemas/announcement.schamas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import styles from "./styles.module.scss"

const FormEditeAnnouncement = () => {

 
  const {announcementId, editeAnnouncements, readAnnouncemntForId, setIsOpenModalDeleteAnnouncement, setIsOpenModalEditeAnnouncement, setReadAnnouncemntForId} = useAnnouncement()


  const {register, handleSubmit, control, formState: { errors }} = useForm<AnnouncementEditeData>({

    resolver: zodResolver(AnnouncementEdite)
   
  })

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control, 
    name: "image", 
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

    

  }

  
  const handleDeleteModal = () => {

    setIsOpenModalDeleteAnnouncement(true)
    setIsOpenModalEditeAnnouncement(false)


  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className={styles.form}>
      
      <div className={styles.inputs_container}>
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

      <div className={styles.inputs_container}>
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

      <div className={styles.div_inputs_container}>

          <div className={styles.inputs_container}>
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

          <div className={styles.inputs_container}>
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
      </div>


      <div className={styles.div_inputs_container}>

        <div className={styles.inputs_container}>
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

        <div className={styles.inputs_container}>
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

      </div>


      <div className={styles.div_inputs_container}>

          <div className={styles.inputs_container}>

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

          <div className={styles.inputs_container}>

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
      </div>

      

     

      <div className={styles.inputs_container}>
        <label htmlFor="description">
        Descrição
        </label>
        <textarea id="description" placeholder="Digite uma descrição"
        {...register("description")} defaultValue={readAnnouncemntForId.description}></textarea>
        {errors.description && <span>{errors.description.message}</span>}
      </div>

      <div className={styles.inputs_container}>
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


      <div className={styles.inputs_container}>
        <label htmlFor="image">
        1° Imagem da galeria
        </label>
        <input 
        
        type="text"
        {...register("url_img1")}
       />

      </div>

      <div className={styles.inputs_container}>
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
          <div className={styles.inputs_container} key={field.id}>
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
            
        
       
      
        <div className={styles.inputs_container}>

          <button className={styles.button_add_img} type="button" onClick={() =>   
          append({url_img: ""}) }>
            criei o campo novo
          </button>
          
        </div>
     

      <div className={styles.buttons_container}>
        <button className={styles.button_remove} type="button" onClick={handleDeleteModal}>
          Excluir anúncio
        </button>
        <button className={styles.button_save}>
          Salvar alterações
        </button>
      </div>
    </form>
  )
}

export default FormEditeAnnouncement