package com.mycompany.myapp.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

public class TrainingTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static Training getTrainingSample1() {
        return new Training().key(1L).id(1L).description("description1");
    }

    public static Training getTrainingSample2() {
        return new Training().key(2L).id(2L).description("description2");
    }

    public static Training getTrainingRandomSampleGenerator() {
        return new Training().key(longCount.incrementAndGet()).id(longCount.incrementAndGet()).description(UUID.randomUUID().toString());
    }
}
