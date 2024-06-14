import Link from "next/link";

export default async function generateMetadata(){
 
  return (
    <>
    
      <Link 
          href="Test_generateMetadata/1" 
          className='text-sky-500 hover:text-sky-600'
          prefetch={false}
      >
          Test generateMetadata
      </Link>
    </>
  )
}
 