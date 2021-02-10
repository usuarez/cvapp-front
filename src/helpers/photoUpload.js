export const fileUpload = async (file) => {

    const cloudUrl = `https://api.cloudinary.com/v1_1/dnpo1nny3/upload`

    const formData = new FormData()
    formData.append('upload_preset','tqcay3xa')
    formData.append('file',file)

    try {
        const res = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        })

        if(res.ok) {
            const cloudRes = await res.json()
            console.log(typeof(cloudRes.secure_url))
            return cloudRes
        } else {
            throw await res.json()
        }

    } catch (error) {
        console.log(error)
    }
}