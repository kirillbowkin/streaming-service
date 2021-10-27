package mma.boys.chat.models;

import lombok.Data;

import java.util.UUID;

@Data
public class Message {
    private String text;
    private UUID id;
    private Sender sender;
}
