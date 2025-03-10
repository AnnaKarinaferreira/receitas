 const input = document.querySelector('.search-input')
 const form = document.querySelector('.search-form')

 form.addEventListener('submit', function(event){
    event.preventDefault()
   console.log(event)

   searchRecipes()
 })

 async function searchRecipes(ingredient){
const response = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
   const data = await response.json()

   console.log(data)
}

