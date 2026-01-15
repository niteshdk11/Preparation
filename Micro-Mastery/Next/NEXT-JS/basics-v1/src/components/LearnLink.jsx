'use client'
import Link from "next/link"
import { useRouter } from "next/navigation";


export const LearnLink = () => {
    const router  = useRouter();
    const id = 2 ;
    console.log(router)
    if(true){
        router.push("/admin/profile")
    }
  return (
    <div>
  <Link href={'/admin/dashboard'}>Go to admin Dashborad</Link> <br />
  <Link href={`/user/profile/${id}`}>Go to user profile </Link>
  {/* ? dynamic */}


    </div>
  )
}
