# zuck-folders

Zuck folders is a bot that surged from the idea to use this: `loopM :: Monad m => (a -> m (Either a b)) -> a -> m b` but at the end, resolves to this `Monad m => (a -> m a) -> a -> m Bottom
` and the only thing it does is tweet "no" every 18 - 22 hours
