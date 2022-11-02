import Box from 'components/atoms/Box'

const LibraryComponent = () => (
  <div className="px-5">
    <h1 className="text-xl font-boldxs">Library Component</h1>
    <hr className="my-5" />

    <h1 className="text-xl font-boldxs">Box</h1>
    <div className="flex gap-3 mb-5">
      <Box direction="row" className="bg-slate-400">
        Test
      </Box>
    </div>
  </div>
)

export default LibraryComponent
