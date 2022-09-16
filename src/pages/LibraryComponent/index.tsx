import Box from 'components/atoms/Box'
import Button from 'components/atoms/Button'
import Checkbox from 'components/atoms/Checkbox'
import Radio from 'components/atoms/Radio'

const LibraryComponent = () => (
  <div className="px-5">
    <h1 className="text-xl font-boldxs">Library Component</h1>
    <hr className="my-5" />

    <h1 className="text-xl font-boldxs">Button</h1>
    <div className="flex gap-3 mb-5">
      <Button size="sm">Button</Button>
      <Button size="md" disabled>
        Button
      </Button>
      <Button size="lg">Button</Button>
      <Button size="sm" variant="outline">
        Button Outline
      </Button>
      <Button size="md" variant="outline" disabled>
        Button Outline
      </Button>
      <Button size="lg" variant="outline">
        Button Outline
      </Button>
    </div>

    <h1 className="text-xl font-boldxs">Checkbox</h1>
    <div className="flex gap-3 mb-3">
      <Checkbox />
      <Checkbox checked label="With Label" />
    </div>
    <div className="flex gap-3 mb-5">
      <Checkbox disabled />
      <Checkbox disabled checked label="With Label" />
    </div>

    <h1 className="text-xl font-boldxs">Radio</h1>
    <div className="flex gap-3 mb-3">
      <Radio />
      <Radio checked label="With Label" />
    </div>
    <div className="flex gap-3 mb-5">
      <Radio disabled />
      <Radio disabled checked label="With Label" />
    </div>

    <h1 className="text-xl font-boldxs">Box</h1>
    <div className="flex gap-3 mb-5">
      <Box direction="row" maxWidth={200} className="bg-slate-400">
        Test
      </Box>
    </div>
  </div>
)

export default LibraryComponent
