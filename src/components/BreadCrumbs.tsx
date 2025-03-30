
import React from "react"
import { FaChevronLeft } from "react-icons/fa"
import { Link } from "react-router-dom"

// Reusable Breadcrumb Component
const Breadcrumb = ({ items = [], showBackButton = true }) => {


   return (
      <div className="flex flex-wrap items-center gap-4 mb-6">
         {showBackButton && (
            <button
               //  onClick={handleBack}
               className="flex items-center gap-2 px-4 py-2 bg-TwPrimaryPurple text-white rounded-md hover:bg-TwPrimaryPurpleBgHover transition-colors"
            >
               <FaChevronLeft size={14} />
               <span>Back</span>
            </button>
         )}

         <div className="flex items-center">
            {items.map((item: any, index: any) => (
               <React.Fragment key={index}>
                  {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                  {item.href ? (
                     <Link
                        to={item.href}
                        className={`hover:text-TwPrimaryPurple transition-colors ${index === items.length - 1 ? "text-TwPrimaryPurple" : "text-gray-600"}`}
                     >
                        {item.label}
                     </Link>
                  ) : (
                     <span className={index === items.length - 1 ? "text-TwPrimaryPurple" : "text-gray-600"}>{item.label}</span>
                  )}
               </React.Fragment>
            ))}
         </div>
      </div>
   )
}

export default Breadcrumb

