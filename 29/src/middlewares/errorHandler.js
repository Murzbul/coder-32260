
const errorHandler = (err, req, res, next) =>
{
  if(err?.name === 'ZodError')
  {
      console.error(err.stack);
      return res.status(400).json({ message: err });
  }
  else if (err?.message.includes('Not Found'))
  {
      console.error(err.stack);
      return res.status(404).json({ message: err.message });
  }

  console.error(err.stack);
  res.status(500).json({ message: 'Ocurrió un error' });
};

export default errorHandler;
