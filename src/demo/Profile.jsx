import React from 'react'

const Profile = () => {
  return (
    <>
    <div class="flex h-screen items-center justify-center mt-4">
  <div class="w-screen m-10 mt-0 rounded-2xl border bg-slate-100">
    <div class="m-8 mb-0 h-[80px] w-[80px] rounded-full bg-white">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="img" class="rounded-full p-1"/>
    </div>
    <div class="ml-8 mt-3 font-medium text-black">Rohit Ranjan (tutor)</div>
    <div class="flex flex-wrap items-center justify-center w-full">
      <div class="m-4 flex justify-center p-4 bg- w-full">
        <div class="rounded-3xl border w-full p-10 m-4 text-black shadow-xl">
         <p class="mb-3">Email: dummy@dummy.com</p> 
         <p class="mb-3"> Skills: HTML, CSS</p> 
         <p class="mb-3">Education: HIT, Kolkata</p> 
         <p class="mb-3">Ratings: 3.5</p> 
         <p class="mb-3"> Doubt Solved: 20</p> 
         
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Profile