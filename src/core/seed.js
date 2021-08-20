import config from './config';
import { rndString } from '@laufire/utils/random';

const refreshIDLength = 4;

const seed = {
	count: config.countStart,
	refreshID: rndString(refreshIDLength),
	input: '',
};

export default seed;
