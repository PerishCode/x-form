import { useState } from 'react'
import XForm from '@perish/react-xform-jsonschema'

export default function App() {
  const [formData, setFormData] = useState([{ a: '123' }, { a: '123' }])
  const [schema] = useState({
    type: 'array',
    title: 'array example',
    template: {
      type: 'object',
      properties: {
        a: {
          title: '属性1',
          type: 'string',
        },
        b: {
          title: '属性2',
          type: 'string',
        },
      },
    },
  })

  return (
    <>
      <XForm schema={schema} formData={formData} onChange={setFormData} />
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </>
  )
}
