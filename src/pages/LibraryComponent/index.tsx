import Box from 'components/atoms/Box'
import InputSelect, { InputSelectOptionInterface } from 'components/atoms/InputSelect'
import InputText from 'components/atoms/InputText'
import TextField from 'components/atoms/TextField'

const LibraryComponent = () => {
  const optionSelect: InputSelectOptionInterface[] = [
    {
      id: 1,
      value: 'anton',
      name: 'Anton',
    },
    {
      id: 2,
      value: 'rudi',
      name: 'Rudi',
    },
  ]
  return (
    <div className="px-5">
      <h1 className="text-xl font-boldxs">Library Component</h1>
      <hr className="my-5" />

      <h1 className="text-xl font-boldxs">Box</h1>
      <div className="flex gap-3 mb-5">
        <Box direction="row" className="bg-slate-400">
          Test
        </Box>
      </div>

      <h1 className="text-xl font-boldxs">TextField</h1>
      <div className="flex gap-3 mb-5">
        <TextField
          hiddenLabel
          margin="normal"
          id="email"
          type="email"
          autoComplete="email"
          placeholder="Email Address"
        />
      </div>

      <h1 className="text-xl font-boldxs">InputText</h1>
      <div className="flex flex-col gap-3 mb-5">
        <InputText label="Input Text" placeholder="Example Placeholder" />
        <InputText
          label="Input With Icon"
          prefixIcon={<div>@</div>}
          placeholder="Example Placeholder"
        />
        <InputText
          isWarning={false}
          isError={false}
          isSuccess={true}
          helper="Ini Text"
          label="Input With Icon"
          prefixIcon={<div>@</div>}
          placeholder="Example Placeholder"
        />
        <InputText
          label="Input With Icon"
          suffixIcon="$"
          placeholder="Example Placeholder"
          disabled
        />
      </div>

      <h1 className="text-xl font-boldxs">InputSelect</h1>
      <div className="flex flex-col gap-3 mb-5">
        <InputSelect />
        <InputSelect
          label="With Label"
          listOption={optionSelect}
          isError={true}
          helper="This is error"
        />
      </div>
    </div>
  )
}

export default LibraryComponent
